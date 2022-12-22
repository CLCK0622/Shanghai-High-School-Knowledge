import React from 'react'
import { useRouter } from "next/router"
import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>上海高中课本知识整理</span>,
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()
    return <>
      <meta property="og:url" content={`https://knowledge.clckblog.space${asPath}`} />
      <meta property="og:title" content={title + ' | 上海高中课本知识整理'} />
      <title>{title + ' | 上海高中课本知识整理'}</title>
      <meta property="og:description" content={frontMatter.description || '上海高中课本知识整理'} />
    </>
  },
  project: {
    link: 'https://github.com/CLCK0622/Shanghai-High-School-Knowledge',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/CLCK0622/Shanghai-High-School-Knowledge',
  footer: {
    text: 'Built with Nextra, modified by Kevin Zhong (aka CLCK) and other contributors. ',
  },
}

export default config
