import React from "react";

export default class HigherOrderComponents extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filterUsingUserType:[],
            filterUsingFirstLetter:[],
            filterUsingAge:[],
            totalYears : 0
        }
        let filterdData = this.state.userData.filter((el,i,arr)=>el.user_type==="Designer")
        
        let ChangeName = this.state.userData.filter((el,i,arr)=>el.name.startsWith("J"))
        let ChangeAge = this.state.userData.filter((el,i,arr)=>el.age>28 && el.age<=50)
        let total = this.state.userData.filter((el)=>el.user_type == "Designer").reduce((acc,el,i,arr)=>{
            return acc+el.years;
        },0)
        this.state.totalYears = total

        console.log(filterdData)
        this.state.filterUsingUserType=filterdData;
        this.state.filterUsingFirstLetter=ChangeName;
        this.state.filterUsingAge=ChangeAge;
    }

    
    render(){
        return(
            <>


             <h1 style={{color:"black", fontSize:"2rem",textAlign:"center"} }>Display all Items </h1>
             <div style={{width:"400px",border:"1px solid black", marginLeft:"15%"}}> 
             {/* writing js in html  */}
             {this.state.userData.map((el,i,arr)=>(
                <div key={el.id} style={{width:"400px",display:"flex"}}>
                   <p style={{paddingRight:"50px",marginLeft:"20px", color:"blue"}}>Id :{el.id}</p>
                  <p style={{marginRight:"20px", color:"blue"}}>Name :{el.name}</p>  
                  <p style={{ color:"blue"}}> UserType:{el.user_type}</p> 

                </div>
             ))}
             </div>


             <h1 style={{color:"black", fontSize:"2rem",textAlign:"center"} }>Display using User type </h1>
             <div  style={{width:"400px",border:"1px solid black", marginLeft:"15%"}}> 
             {/* writing js in html  */}
             {this.state.filterUsingUserType.map((el,i,arr)=>(
                <div key={el.id} style={{width:"400px",display:"flex"}}>
                   <p  style={{paddingRight:"50px",marginLeft:"20px", color:"blue"}}>Id :{el.id}</p>
                  <p style={{ marginRight:"20px", color:"blue"}}>Name :{el.name}</p>  
                  <p style={{ color:"blue"}}> UserType:{el.user_type}</p> 

                </div>
             ))}
             </div>


             <h1  style={{color:"black", fontSize:"2rem",textAlign:"center"} }>Display using first name </h1>
             <div  style={{width:"400px",border:"1px solid black", marginLeft:"15%"}}> 
             {/* writing js in html  */}
             {this.state.filterUsingFirstLetter.map((el,i,arr)=>(
                <div key={el.id} style={{width:"400px",display:"flex"}}>
                   <p  style={{paddingRight:"50px",marginLeft:"20px", color:"blue"}}>Id :{el.id}</p>
                  <p style={{ marginRight:"20px", color:"blue"}}>Name :{el.name}</p>  
                  <p style={{ color:"blue"}}> UserType:{el.user_type}</p> 

                </div>
             ))}
             </div>


             <h1  style={{color:"black", fontSize:"2rem",textAlign:"center"} }>Display using Age</h1>
             <div style={{width:"400px",border:"1px solid black", marginLeft:"15%"}}> 
             {/* writing js in html  */}
             {this.state.filterUsingAge.map((el,i,arr)=>(
                <div key={el.id} style={{width:"400px",display:"flex"}}>
                   <p  style={{paddingRight:"50px",marginLeft:"20px", color:"blue"}}>Id :{el.id}</p>
                  <p style={{ marginRight:"20px", color:"blue"}}>Name :{el.name}</p>  
                  <p style={{ color:"blue"}}> UserType:{el.user_type}</p> 

                </div>
             ))}
             </div>


               
                  <h1  style={{color:"black", fontSize:"2rem",textAlign:"center"} }>Find the total years of the designers</h1>
                  <div style={{width:"400px",border:"1px solid black", marginLeft:"15%"}}>
                  <p style={{color:"blue",textAlign:"left"}}>{this.state.totalYears}</p>
                </div>
        </>
            
        )
    }
}