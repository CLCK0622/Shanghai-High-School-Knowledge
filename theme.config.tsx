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
      <meta property="og:description" content={frontMatter.description || '上海高中课本知识整理'} />
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
    text: 'Built with Nextra, modified by Kevin Zhong (aka CLCK) and other contributors. ',
  },
  search: {
    emptyResult: <div className="nx-mt-4 nx-flex nx-justify-center nx-items-center nx-text-gray-500 nx-font-semibold nx-text-s nx-select-none">没有结果</div>,
    loading: '加载中...',
    placeholder: '搜索',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
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
        titleTemplate: '%s | 上海高中课本知识整理'
      }
    } else {
      return {
        titleTemplate: '上海高中课本知识整理'
      }
    }
  },
}

export default config
