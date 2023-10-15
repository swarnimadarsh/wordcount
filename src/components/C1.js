import {Component} from 'react';

class C1 extends Component
{
    constructor()
    {
        super();
        this.state={word:"0"};
    }
    countword=(event)=>{
        const wordCount =event.target.value === "" ? 0 : event.target.value.split(" ").length;
        this.setState({
            word: wordCount
        })
    }
    
    render(){
        return(
            <div class="row">
                <div class="col-md-4"></div>
                <div class="cards col-md-4 m-3 text-center bg-light">
                    <h2 class="c1">Responsive Paragraph word counter</h2>
                    <textarea className='form-control' rows={8} cols={35} placeholder='give the string' onKeyUp={this.countword}/>
                    <p class="text-start"> Word Count {this.state.word}</p>
                </div>
                <div class="col-md-4"></div>
                
            </div>
        );
    }
}
export default C1;