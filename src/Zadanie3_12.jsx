import React, { useState } from "react"; 
 
function Zadanie3_12() { 
      function Zadanie3_12a({ children, maxChars = 100 }) { 
        const [isExpanded, setIsExpanded] = useState(false); 
       
        const text = isExpanded ? children : children.substring(0, maxChars) + (children.length > maxChars ? "..." : ""); 
       
        return ( 
          <> 
            <p>{text}</p> 
                {children.length > maxChars && ( 
              <button onClick={() => setIsExpanded(!isExpanded)}> 
                {isExpanded ? "Mniej" : "Więcej"} 
              </button> 
            )} 
          </> 
        );
    }
    let reviews =   [   
                        {id: 1, author: 'a1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 2, author: 'a2', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 3, author: 'a3', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 4, author: 'a4', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 5, author: 'a5', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 6, author: 'a6', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
                        {id: 7, author: 'a7', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." }
                    ];
    function Zadanie3_12b({maxReviews}){
        const [isExpanded, setIsExpanded] = useState(false); 
       
       function DisplayReview({review}){
        return(<>{review.author}: {review.content} <br></br></>);
        }
       function shortDisplay(){
        console.log(reviews[0]);
        return(<>
                <DisplayReview review={reviews[0]} />
                <DisplayReview review={reviews[1]} />
                <DisplayReview review={reviews[2]} />
            </>
        );     
        }

       function longDisplay(n){
        let show = '';
        for(var i = 0; i<n; i++){
            show += (reviews[i].author+": "+ reviews[i].content +'\n');
        }
        return(<>{show}</>);
        }
        return ( 
          <> 
            <p>{isExpanded ? longDisplay(maxReviews) : shortDisplay()}</p> 
            <button onClick={() => setIsExpanded(!isExpanded)}> 
                {isExpanded ? "Mniej" : "Więcej"} 
              </button> 

          </> 
        );
    } 
    return ( 
        <div>   
                <Zadanie3_12a maxChars={20}>   
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. 
                </Zadanie3_12a>   
                <Zadanie3_12b maxReviews = {7}/>
      </div>  
    );  
  } 
 
export default Zadanie3_12; 