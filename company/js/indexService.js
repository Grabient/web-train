$(document).ready(function () {

    axios({
        url: 'https://www.fastmock.site/mock/639fe8e80bf9ac99955afff4df0cce47/company/banner',
        method: 'get',   //get是默认的
    }).then(res => {
        console.log(res.data);
        let box2 = $('.box2')

        res.data.forEach((item, index) => {
            box2.append(`
                <div class="label">
                  <img src="${item.src}" alt="">
                  <p>${item.name}</p>
                </div>
            `)
        })
    })

    axios({
        url: 'https://www.fastmock.site/mock/639fe8e80bf9ac99955afff4df0cce47/company/scanner',
        method: 'get'
    }).then(res => {
        console.log(res.data);
        let figure = $('.figure')

        res.data.forEach((item, index) => {
            if (index % 2 === 0) {
                figure.append(`
               <div class="tup">
                   <img src="${item.src}" >
               
                   <div class="b">
                        <h3>${item.title}</h3>
                        <span>${item.span1}</span>
                        <div class="bottom">
                              <span>${item.span2}</span>
                        </div>
                   </div> 
               </div>       
            `
                )
            } else {
                figure.append(`
                <div class="tup">
                     <div class="b">
                         <h3>${item.title}</h3>
                         <span>${item.span1}</span>
                        <div class="bottom">
                              <span>${item.span2}</span>
                        </div>
                     </div>  
                     <img src="${item.src}" >
                </div>
               `)
            }
        })
    })

    axios({
        url:"https://www.fastmock.site/mock/639fe8e80bf9ac99955afff4df0cce47/company/news",
        methods:"get"
    }).then(res =>{
        console.log(res.data);
        let box3=$(".box3")

        res.data.forEach((item) =>{
            box3.append(`
                <div class="news">
                    <img src="${item.src}" alt="">
                    <p>${item.content}</p>
                </div>
            `)
        })
    })

})



