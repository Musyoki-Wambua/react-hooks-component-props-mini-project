import React from "react"; 

function articleRead (minutes){
    if (minutes > 0 && minutes < 30) {
        const time= Math.ceil(minutes / 5);
        return "☕️".repeat(time);
    } else if (minutes >= 30) {
        const time= Math.ceil(minutes / 10);
        return "🍱".repeat(time);
    }
}

function Article ({title, date = "January 1, 1970", preview, minutes}){
    return (
        <article>
            <h3> {title} </h3>
            <small>  {date} {articleRead(minutes)} {minutes} min read</small>
            <p> {[preview]} </p>
        </article>
    )
}
export default Article;