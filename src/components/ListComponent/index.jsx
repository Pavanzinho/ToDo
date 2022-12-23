import {ListComponentContainer} from './styles';
import {ButtonCheckContainer} from './styles';

import { AiOutlineCheckCircle} from 'react-icons/ai'
import { ImRadioUnchecked} from 'react-icons/im'

import {HiOutlineTrash} from 'react-icons/hi'

import {useState} from 'react'

export function ListComponent({content,onDeleteComponentText,onAddOfCompletedTaskCount,onSubtractionOfCompletedTaskCount}){
    
   
    const [checked,setChecked]=useState(false)

    function handleClickButtonCheck(){
        setChecked(checked=>!checked)
        onAddOfCompletedTaskCount()
        // setcompletedTasks(completedTasks=>completedTasks++)
    }

    function handleClickButtonUnheck(){
        setChecked(checked=>!checked)
        onSubtractionOfCompletedTaskCount()   
    }

    function handleDeleteComponentText(){
        if(checked==false){
            onDeleteComponentText(content)
        }else{
            onDeleteComponentText(content)
            onSubtractionOfCompletedTaskCount()
        }  
    }    
    
    return(
        
        <ListComponentContainer>
            <ButtonCheckContainer
            className={checked? 'styleButtonWhenChecked':'styleButtonWhenNoChecked'}
            onClick={checked?handleClickButtonUnheck:handleClickButtonCheck}//condicional no onclick.
            
            >
                {checked? <AiOutlineCheckCircle/>:<ImRadioUnchecked/>}
            </ButtonCheckContainer>
            <span className={checked? 'styleTextWhenChecked':'styleTextWhenNoChecked' }>
                {content}
            </span>
            
            <button 
            className='buttonDelete'
            onClick={handleDeleteComponentText}
            >
                <HiOutlineTrash size={16}/>
            </button>

        </ListComponentContainer>
    )
}