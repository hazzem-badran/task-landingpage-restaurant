import React, { Component } from 'react'
import InfoForSections from '../../Components/InfoForSections'
import './index.css'
import Blogcomon from '../../Components/Blogcomon'
import blogOne from '../../Assets/Images/blogOne.png'
import blogTwo from '../../Assets/Images/blogTwo.png'
import blogThree from '../../Assets/Images/blogThree.png'

export default class BlogsPage extends Component {
  render() {
    return (
      <div className='blogspage__contain'>
        <InfoForSections  textH3="Blogs" textP="words from our food lovers" />
        <div className="blog__contain">
          <Blogcomon blogSrc={blogOne} blogAlt= "blogOne" blogtxt1 ="Cooking Dining Experience" blogtxt2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " />
          <Blogcomon blogSrc={blogTwo} blogAlt= "blogTwo" blogtxt1 ="Cooking Dining Experience" blogtxt2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " />
          <Blogcomon blogSrc={blogThree} blogAlt= "blogThree" blogtxt1 ="Cooking Dining Experience" blogtxt2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin " />
        </div>
      </div>
    )
  }
}
