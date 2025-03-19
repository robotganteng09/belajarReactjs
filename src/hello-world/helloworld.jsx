export default function helloWorld(){
    return(
        <div>
        <HeaderHelloWorld/>
        <ParagraphHelloWorld/>
        </div>
    )
}

//note: bisa memanggil function dan di tampilkan
function HeaderHelloWorld(){
    const text1 = "hello"
    return(
    <div>
         {/* <h1>Hello</h1> */}
         <h1>{text1.toUpperCase()}</h1>
    </div>
    )
}

function ParagraphHelloWorld(){
    const text2 = "selamat datang"
    return(
        <div>
      {/* <h2>selamat datang</h2> */}
      <h2>{text2.toUpperCase()}</h2>
    </div>
    ) 
}