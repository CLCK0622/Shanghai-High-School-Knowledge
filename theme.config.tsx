import React from 'react'
import { useRouter } from "next/router"
import { useConfig } from "nextra-theme-docs"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: (<><img src="/favicon.png" width="200px" /></>),
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()
    return <>
      <meta property="og:url" content={`https://knowledge.clckblog.space${asPath}`} />
      <meta property="og:description" content={frontMatter.description || '由 @CLCK 及其他人一起整理的，以上海市 2025 届高中课标教材为蓝本的高中课本知识库。'} />
    </>
  },
  project: {
    link: 'https://github.com/CLCK0622/Shanghai-High-School-Knowledge',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/CLCK0622/Shanghai-High-School-Knowledge/tree/main',
  footer: {
    // text: '由 Kevin Zhong (aka CLCK) 和其他贡献者精心整理 | 自豪地使用 Nextra 生成网站',
    text: <div><p>由 Kevin Zhong (aka CLCK) 和其他贡献者精心整理 | 自豪地使用 <img src="/nextraIcon.svg" width={'5%'} style={{display: 'inline'}} /> 生成网站</p><br /><p><span>Powered by </span><img src='/vercelIcon.svg' width={'5%'} style={{display: 'inline'}} /></p></div>
  },
  main: (props) => {
    return <>
      {props.children}
      <div id="waline" />
    </>
  }, 
  search: {
    emptyResult: <div className="nx-mt-4 nx-flex nx-justify-center nx-items-center nx-text-gray-500 nx-font-semibold nx-text-s nx-select-none">没有结果</div>,
    loading: '加载中...',
    placeholder: '搜索',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    // toggleButton: true, 
  },
  toc: {
    title: "目录", 
  },
  editLink: {
    text: '编辑本页面 ↗',
  },
  feedback: {
    content: '有问题？前往反馈 ↗',
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s - 上海高中课本知识整理'
      }
    } else {
      return {
        titleTemplate: '上海高中课本知识整理'
      }
    }
  },
}

export default config
