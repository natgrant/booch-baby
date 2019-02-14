import React from "react";
import { connect } from "react-redux";

import BoochListItem from './BoochListItem'

class BoochList extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      kombucha: [
        {
          id: 1,
          name: "Coffee Kombucha",
          description:
            "An experimental blend of kombucha and coffee, using Peoples Coffee Beans",
          size: "500 ml",
          price: 5.99,
          image: ""
        },
        {
          id: 2,
          name: "Blueberry and Ginger",
          description: "Kombucha with organic blueberry and ginger",
          size: "500 ml",
          price: 5.99,
          image: ""
        },
        {
          id: 3,
          name: "Blueberry and Ginger",
          description: "Kombucha with organic blueberry and ginger",
          size: "1 litre",
          price: 9.99,
          image: ""
        },
        // {
        //   id: 4,
        //   name: "Lemon and Ginger",
        //   description:
        //     "Kombucha with organic lemon and ginger, great for summer or winter",
        //   size: "500 ml",
        //   price: 5.99,
        //   image: ""
        // },
        // {
        //   id: 5,
        //   name: "Lemon and Ginger",
        //   description:
        //     "Kombucha with organic lemon and ginger, great for summer or winter",
        //   size: "1 litre",
        //   price: 9.99,
        //   image: ""
        // },
        // {
        //   id: 6,
        //   name: "Chai Blend",
        //   description:
        //     "Kombucha with chai spices, including cinnamon, cardamom and turmeric",
        //   size: "500 ml",
        //   price: 5.99,
        //   image: ""
        // },
        // {
        //   id: 7,
        //   name: "Chai Blend",
        //   description:
        //     "Kombucha with chai spices, including cinnamon, cardamom and turmeric",
        //   size: "1 litre",
        //   price: 9.99,
        //   image: ""
        // },
        // {
        //   id: 8,
        //   name: "Very Berry Booch",
        //   description:
        //     "Strawberry and blackberry flavour is a must try, limited edition",
        //   size: "500 ml",
        //   price: 5.99,
        //   image: ""
        // },
        // {
        //   id: 9,
        //   name: "Very Berry Booch",
        //   description:
        //     "Strawberry and blackberry flavour is a must try, limited edition",
        //   size: "1 litre",
        //   price: 9.99,
        //   image: ""
        // },
        // {
        //   id: 10,
        //   name: "Floral Jasmine",
        //   description:
        //     "Kombucha blended with Jasmine and Green tea, a great alcohol replacement",
        //   size: "1 litre",
        //   price: 9.99,
        //   image: ""
        // }
      ]
    } 
  }
  render(){
  return (<div className='columns'>
    {this.state.kombucha.map((item,i)=>{
      return( <BoochListItem key= {i} details={item}/>)
    })}
  </div>)
};
}

const mapStateToProps = state => {
  return ;
};

export default connect(mapStateToProps)(BoochList);
