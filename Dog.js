class Dogs {
    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml(){
        const { name, avatar, age, bio} = this
        return `
            <div class="dog-data">
                <img class="avatar" src="${avatar}">
                <div>
                <img class="badge" id="likeBadge" src="images/badge-like.png">
                <img class="badge" id="nopeBadge" src="images/badge-nope.png">
                </div>
                <div class="dogs-html-data">
                    <h1 class="dog-name">${name}, ${age}<span class="dog-bio"><h4>${bio}</h4></span> </h1>
                </div>
            <div>
        `
    }
}

export { Dogs } 
