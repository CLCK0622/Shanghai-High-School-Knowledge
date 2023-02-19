import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Error from 'next/error'
import Main from '@/components/Main'
import Container from '@/components/Container'
import elements from '@/data/elements'
import styles from './[symbol].module.scss'

export async function getServerSideProps(context) {
  return {
    props: {
      data: elements.find(x => x.symbol === context.query.symbol),
    },
  }
}

function ElementPage({ data }) {
  const router = useRouter()
  const { symbol } = router.query

  // FIXME: Couldn't catch the error if the module is not found.
  var Content = <>Document not available.</>
  Content = dynamic(
    () => import(`@/docs/elements/${symbol}.mdx`).catch(err => <></>),
    {
      loading: () => <></>,
    },
  )

  // before `data` is ready, the page seems to be 404
  if (typeof data === 'undefined') {
    return <Error statusCode={404} />
  }

  function DataItem({ label, value, className, ...props }) {
    return (
      <div
        className={styles.dataItem + (className ? ' ' + className : '')}
        {...props}
      >
        <label>{label}</label>
        <output>{value}</output>
      </div>
    )
  }

  return (
    <Main>
      <Container size="lg" className={styles.splitView}>
        <aside className={styles.aside}>
          <div className={styles.basics}>
            <h1 className={styles.title}>{data.symbol}</h1>
            <div className={styles.data}>
              <DataItem label="名称" value={data.name} />
              <DataItem label="英文名称" value={data.englishName} />
              <DataItem label="序数" value={data.atomicNumber} />
              <DataItem label="族" value={data.group} />
              <DataItem label="周期" value={data.period} />
              <DataItem label="相对原子质量" value={data.atomicMass} />
            </div>
          </div>
        </aside>
        <div className={styles.content}>
          <Content />
        </div>
      </Container>
    </Main>
  )
}

export default ElementPage
