
import headerImg from "../assets/header-image.svg"

// type HeaderProps = {
//   text: string;
//   time: number;
//   color: string;
// }

// 中身はstringsでもpropsはオブジェクトなので、propsでデータを渡すと自然とオブジェクトになる
// なので、オブジェクトの形式で型注釈をする
// const Header = (props: {text: string}) => {
const Header = ()=> {

  return (
    <header>
      <a href="/"><img src={headerImg} alt="header-image" /></a>
    </header>
  )
}

export default Header