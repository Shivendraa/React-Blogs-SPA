//import logo from './logo.svg';
import React, {Component} from 'react';
import BlogItem from './BlogCard';
import './App.css';
class App extends Component{
  state = {
    showBlogs : true,
    blogArr : [
      {
        id: 1,
        title : "Demo Title 1",
        description : "Demo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whq",
        likeCount: 0
      },
      {
        id: 2,
        title : "Demo Title 2",
        description : "Demo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whq",
        likeCount: 0
      },
      {
        id: 3,
        title : "Demo Title 3",
        description : "Demo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whqDemo desc hello i want to mee lara ejhkn whq",
        likeCount: 0
      }
  ]
  }
/*
  const firstName = 'John';
  const lastName = 'Wolf';
  const age = 29;
  const job = 'Killer';
  const inputPlaceHolder = 'Enter your name';
  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  }
  const inputBox =  <input placeholder={inputPlaceHolder} />;
  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

       {inputBox}
    </div>
  );
*/
  
//const blogArr = undefined;
//const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {

  onLikeBtnClick = (pos) => {
    //alert('Like Button Clicked at position =>'+pos);
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObject = updatedBlogList[pos];
    updatedBlogObject.likeCount = updatedBlogObject.likeCount+1;
    updatedBlogList[pos] = updatedBlogObject;
    this.setState({blogArr: updatedBlogList});
    console.log(updatedBlogObject);

  }



onHideBtnClick = () => {
  //let updatedState = !this.state.showBlogs;
  this.setState((prevState, prevProps) => {
    return{showBlogs: !prevState.showBlogs}
  });
}



render() {

  const blogCards = this.state.blogArr.map((item, pos) => {
    return(
      <BlogItem className={BlogItem} key={pos} title={item.title} description={item.description} 
      likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    );
  });

  return(
    <div className="App">
      <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br />
      {
        this.state.showBlogs ? blogCards : null
      } 
    </div>
   )
}

 
}

export default App;
