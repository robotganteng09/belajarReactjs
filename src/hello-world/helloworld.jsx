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
         <h1 style={{
            color:"red", // bisa memanggil langsung
            backgroundColor:"aqua"
         }}>{text1.toUpperCase()}</h1>
    </div>
    )
}

function ParagraphHelloWorld(){
    const text2 = "selamat datang"
    const style = {color:"blue",backgroundColor:"red"} // bisa dibungkus terlebih dahulu
    return(
        <div>
      {/* <h2>selamat datang</h2> */}
      <h2 style={style}>{text2.toUpperCase()}</h2>
    </div>
    ) 
}