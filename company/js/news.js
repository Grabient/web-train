
$(document).ready(function() {

    axios.get("https://www.fastmock.site/mock/639fe8e80bf9ac99955afff4df0cce47/company/widow",
    ).then(res => {
        console.log(res.data);
        let figure = $('#figure')

        res.data.forEach((item) => {
            figure.append(`
                <div class="box">
                    <div>
                        <a href="${item.add}">
                            <img src="${item.src}" alt="">
                        </a>
                    </div>
                    <div class="text">
                        <h3>${item.title}</h3>
                        <p>${item.data}</p>
                        <span>${item.span}</span>
                    </div>
                </div>

            `)
        })
    }).catch(error => {
        console.log(error);
    })

})