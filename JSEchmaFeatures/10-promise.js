const http=require('http');

function fetchWebpage(url){
  // when there is promise we have two options if stay or break
  return new Promise((resolve,reject)=>{
    // we have to wrap because get have to do to server and get response
    http.get(url,response=>{
      let responseData;
      response.on('data',data=>responseData=responseData+data);
      response.on('end',()=>resolve(responseData));
      response.on('error',reject);
    });
  });
}
fetchWebpage('http://www.krishantha.com')
.then(data=>console.log(data.length))
.catch(error=>console.log(error))
.finally(()=>console.log("finished"));

function readwebPage(){
  let resp=''
  resp=fetchWebpage('http://www.krishantha.com');
  console.log("2", resp.length);
}
// in her it doesnt wait until the result comes
readwebPage();

async function readwebpage2(){
  let resp=''
  //in here it tells wait untill the response comes after that come to the next line
  // await only valid in the async function only 
  resp=await fetchWebpage('http://www.krishantha.com');
  console.log("3", resp.length);
}
readwebpage2();
