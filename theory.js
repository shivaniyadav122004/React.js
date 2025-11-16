
//day--3
//hooks wo function hai jo react ko help krte hia react ko react bnane me ,, variables ko declare krne ke liye useState ka use krte hai ise import krna pdta hai (jese destructuring krte hai)
//syntax--let data=useState() or bracket ke ander kuchh bhi paas kr skte hai or useState ek array return krta hai or us array me pehli value jo hum define krenge or dusri value function hoti hai let [count,set]=useState(10) is case me initialially count ki value 10 hai 
// set function---state ko update krta hai or rerender krta hai and set function is async 

//day--4
//props - hr ek component apne ander ek prop rkhta hai ,props means parameter and prop is a blank opject or agr hum ek component se dusre component me kuchh value bhejna chhate hai to props ka use hota hia ,props object hai isliye wo key value pair me chheze leta hai 
//ye parents se child ko diye jaate hai lekin  agar hum chhahe to child se parents ko bhi de skte hai lekin usske liye ek indirect method hoti hai 

//day--5,, 3 november 2025
//one param with implicit return  (a)=>a
//ek  prev naam ka keyword hota hia jo apni puranni value ko yaad rkhta hai syntax likhne ka (prev)=>prev+1 to purani value me 1 add hota jaayga ,,setCount ya jise bhi update krna chhate hai uske ander likhte hai jese setCount((prev)=>prev+1)
//props drilling-jb props parent se child fir uske bhi child aise hirarchy me bheja jay to use props drilling kehte hai 
//ye sirf chhoti cheezo ko  liye use kiya jaata hai islijiye iski  jgah pr aaya global store or usme context api ka use kiya jaata hai 
//or props drilling child to parent bhi hoti hai lekin wo indirect hoti hai or bahut complex hoti hai ---aise krte hai ki parent class me ek function bnate hai or usme as a paramerter data bheja jaata hai or fir us function ko child me call kiya jaata hai mtlb destructuring krte hai jese props ki krte hai or fir use call krte hai like Getinfor(data) or us data ki value hum child me hi usestate krne bnate hai or fir parent class me child ke components me use key value pair me de dete hia us function ko jo humne bnaya tha 

//day-6
//iske liye onchange event hota hai input pr ,jb bhi input ki vvalue chaiye ho to hmesha onchange event lgana hia 
//one way binding-hum input ki value react ko bheje to one way binding and isme input react se connect hai 
//two way binding-input ko bhi control kre react use two way binding kehte hai kese krenge--aise --input field me value attribute ka use krte hai exampple-value={inputValue} inputvalue aaygi useState se ,,isme input react se fir react input se connect hoti hai mtlb isse react bhi input ko control krne lgta hai 
//three types of two way binding hoti hai ye tha sirf pehla tareeka 

//day-7
//jb hum useState bnate hai to agar hume bahut saare varialble bnane hai to utni hi useState bnani pdti hai isse achha ye hota hai ki useState ke ander ek object bnay or usme key value pair me saari chheze store krwa de 
//agar hum input tag bnate hai or usme direct e.target.value se krenge to wo purani chhezo ko store nii kr paayaga isliye pehle jo object bnaya use ya purani details ko store krwaya hoga uske liye spread method ka use krte hai ({...frames}) or fir ...frames ke aage likh skte hai name: e.target.value isse wo purana data bhi yaad rkhega or jo new value aaygi wo bhi print hogi object ke ander name wali field ke liye lekin agar name wali field pehle hogi to use update krega or agar nii hogi to object me next key value pair name naam se khud ban jaayga 
//example 
//const[data,setData]=useState({
// name:"",
//sirname:""
//})
//console.log(data)
// <input onChange={(e)=>{setData({...data,name:e.target.value})}}  type="text" placeholder="enter name"><input/>
// ye krne se data wale object me jo bhi hum input likhenge wo set ho jaaygi or hume dikhegi

//day-8
//hr dom ke element ko ek unique key di jaati hai using name keyword , to jitni bhi chheze bnai usme name attribute de skte hai bs inki value alag alag rkhenge sbhi input me to like-name="anything..""
//or fir is name ko hum apne function me use kr
//dynamic value of key ki change krna hai to use square bracket ka use krre hai [name]="email" mtlb name naam ki key bn jaaygi or useki value emaiil hai 
//form me hmesha e.preventDefault() or uski input ki values reset krne ke liye form.reset() ya lekin sirf itna krne se wo reseat nii hota iske liye two way binding krni pdti hai taki react bhi input ko control kr paay to hr ek input me value di jaati hai like--value="formdata.name" yha pr formdata hamaara useState ka 1st chhez hai 

//day-9
//localstorage me data sset krna seekha....localStorage.setItem("info",JSON.stringify()) 
//or local storage ke ander hum ek array ke ander sare objects ko daalna chahte hai isliey ek blank arr bna lenge app.jsx me with  the help of useState ke for use jis bhi child me use krna chhate hai usme as a props use kr lenge or us naye useState ko update krdenge ki wo update ho mtlb purani value bhi or jo new value objects ki hogi wo bhi ho tbhi jese setData((prev)=>[...prev,forDatta]) ////ye smjhne ke liye 07-authentication wala part dekhna pdega 


//day-10
//local storage is async 
//opitional chaining--question mark lga kr krte hai means ques mark se pehle wali chhez pr kaam krta hai 
//null ek  falsy value hoti hai or khali local storage ek null value deta hai and blank array ek true value deta hai 
//useState bhi call back function ko allow  krta hia or kuchh value return bhi krta hai 

//12
//cart functionality bnai thi 
//react tostifier


//day-13
//react hook form --09
//ui libraray-hamare ui ke liye components provide krti hai isme redimade code rehta hia or use hum use krte hai (like anti design website,) agar is use krna hia to pehle install krna hai or fir
//react hook form ui libraries ke sath acche se kaam kr leta hia
//useform ko import bhi krna pdhta hai tabhi react hook form kaam krega
//hum chahe to react hook form use kr skte hai ya static two way binding ,bde project me hume storage bachane ke liye hum static two way binding ka use krte hai kyuki react hook form se dependenciees bdti hai 
//react hook form me step1-use register,handlesubmit and reset ko use frorm se destructuring krlenge fir 
//step2-input me register ko use krenge or register me ek key paas krenge use unique bnane ke liye or react purana data bhi yaad rkhe isliye spread operator ka use bhi krenge 
//{...register("name")} 
//form pr handle submit lgaynge usme data ki consolle kr

//day=14 -09
//react hook form hi pdha tha usme validation wala part 
//errors ke liye const me formState ke ander se errors ko destructure krna pdhta hai 
//fir jaha bhi error show krwana hai wha pr ye  lilkh denge --{error.name && error.name.type==="required"?(<p>this is name erorr<p/>):null} //iske liye hume input me  required ko bhi destructure krna pdhta hai jese -- {required:true ,minLength:6}

//day-15
