import "./helloWorld.css"

export default function helloWorld(){
    const props = {
        text1:"mas tampan"
    }
    return(
        <div>
        <HeaderHelloWorld {...props}/>
        <ParagraphHelloWorld/>
        </div>
    )
}

//note: bisa memanggil function dan di tampilkan
function HeaderHelloWorld({text1 = "ayam"}){
    // const text1 = "hello"
    return(
    <div>
         {/* <h1>Hello</h1> */}
         <h1 className="title">{text1.toUpperCase()}</h1>
    </div>
    )
}

function ParagraphHelloWorld(){
    const text2 = "selamat datang"
    // const style = {color:"blue",backgroundColor:"red"} // bisa dibungkus terlebih dahulu
    return(
        <div>
      {/* <h2>selamat datang</h2> */}
      <h2 className="content">{text2.toUpperCase()}</h2>
    </div>
    ) 
}