import Giscus from "@giscus/react";

function Comments() {
  return (
    <>
      <div style={{ height: 50 }} />
      <hr />
      <div style={{ height: 50 }} />
      <Giscus
        id="comments"
        repo="CLCK0622/Shanghai-High-School-Knowledge"
        repoId="R_kgDOIqDhzg"
        category="Announcements"
        categoryId="DIC_kwDOIqDhzs4CUl3j"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        crossorigin="anonymous"
        loading="lazy"
        async
      />
    </>
  );
}

export default Comments;
