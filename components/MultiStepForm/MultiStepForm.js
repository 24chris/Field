import React, { Component } from 'react'
import Biodata from './Biodata';

export default class MultiStepForm extends Component {

    
    prevStep = () =>{
        const {step} = this.state;
        this.setState({step:step-1});
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({step:step + 1});
    }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        // return (
        //     <div>
        //         <h1>Hello</h1>
        //     </div>
        // )

        // const {step} = this.state;
        // const {
        //     university,
        //     title,
        //     college,
        //     department,
        //     phone_number,
        //     courseField,
        //     course,
        //     inDepartment,
        //     year_of_study,
        //     reg_no,
        //     residence,
        //     gname,
        //     gtel,
        //     letter,
        //     uniID
        // } = this.state;

        // const values = {
        //     university,
        //     title,
        //     college,
        //     department,
        //     phone_number,
        //     courseField,
        //     course,
        //     inDepartment,
        //     year_of_study,
        //     reg_no,
        //     residence,
        //     gname,
        //     gtel,
        //     letter,
        //     uniID,
        // }
        switch(step){
            case 1:
             return(
                 <Biodata
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                 />
             )
             case 2:
                 return(
                  <universitydetails
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                     />
                 )
            case 3:
                 return(
                  <coursedetails
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                     />
                 )
            case 4:
                return(
                  <h1> Success</h1>
                )
            default:
        }
        
    }
}
