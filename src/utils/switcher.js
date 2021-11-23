export function switchDetailTitle(id, language) {
    let content = ""
    switch (id) {
        case "experiences":
          content = (language==='en'?'Experiences':'工作经验')
          break
        case "skills-proglang":
          content = (language==='en'?'Skills / Programming Language':'技术栈/语言')
          break
        case "skills-database":
          content = (language==='en'?'Skills / Database':'技术栈/数据库')
          break
        case "skills-tools":
          content = (language==='en'?'Skills / Tools': '技术栈/工具')
          break
        case "education":
          content = (language==='en'?'Education':'教育')
          break
        default:
          content = (language==='en'?'Others':'其它')
          break
      }
    return content
}