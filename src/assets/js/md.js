import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  typographer: true,
  linkify: true,
});

const renderMD = (block) => md.render(block);

export default renderMD;
