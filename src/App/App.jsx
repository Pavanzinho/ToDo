import {AppContainer} from './styles'
import {ListContainer} from './styles'
import {InputArea} from './styles';
import {EmptySectionImageContainer} from './styles';

import {Header} from '../components/Header';
import {ListComponent} from '../components/ListComponent';
import {useState} from 'react';

import {BsPlusCircle} from 'react-icons/bs'


export function App(){

    const[contentListComponents,setContentListComponents]=useState([])
    const[newComponentText,setNewComponentText]=useState('')
    const [completedTasks,setCompletedTasks]=useState(0)
    const isNowComponentEmpty=newComponentText.length==0

    
    
    function addOfCompletedTaskCount(){
        setCompletedTasks(completedTasks+1)
    }

    function subtractionOfCompletedTaskCount(){
        setCompletedTasks(completedTasks-1)
    }
    

    function handleCreateNewComponentList(){
        event.preventDefault()
        setContentListComponents([...contentListComponents,newComponentText])
        setNewComponentText('')
    }

    function handleNewComponentTextChange(){
        setNewComponentText(event.target.value)
    }

    function deleteComponentText(ComponenTextToDelete){
        const componentsWithoutDeleteOne=contentListComponents.filter(componentsText=>{
            return componentsText !== ComponenTextToDelete
            })
            setContentListComponents(componentsWithoutDeleteOne) 
    }

    function keyUpEnter(event){
        event.target.onKeyUp="Enter"

        
    }   
    
    return(
        <AppContainer>
            <Header/>
            <main>
                <InputArea>
                    <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newComponentText}
                    onChange={handleNewComponentTextChange}
                    onKeyUp={keyUpEnter}
                    />
                    
                    <button 
                    type='submit'
                    onClick={handleCreateNewComponentList}
                    disabled={isNowComponentEmpty}
                    >
                        Criar  
                        <BsPlusCircle size={16}/>     
                    </button>
                </InputArea>
               
                <section>
                    <div className='taskCounter'>
                        <div className='tasksCreated'>
                            <span>Tarefas criadas</span>
                            <div className='countCreatedTasks'>
                                <span>{contentListComponents.length}</span>
                            </div>
                        </div>
                        <div className='tasksCompleted'>
                            <span>Concluídas</span>
                            <div className='countCompletedTasks'>
                                <span>{completedTasks}</span> 
                                <span>de</span>
                                <span>{contentListComponents.length}</span>
                            </div>  
                        </div>
                    </div>

                    <ListContainer>
                        {contentListComponents.length?
                            contentListComponents.map(text=>{
                                return(
                                    <ListComponent
                                    content={text}
                                    onDeleteComponentText={deleteComponentText}
                                    key={text}
                                    onAddOfCompletedTaskCount={addOfCompletedTaskCount}
                                    onSubtractionOfCompletedTaskCount={subtractionOfCompletedTaskCount}
                                    />
                                )
                            }): 
                            <EmptySectionImageContainer>
                                <img src="/src/assets/Clipboard.png" alt=""/>
                                <span>Você ainda não tem tarefas cadastradas</span>
                                <span>Crie tarefas e organize seus itens a fazer</span>

                            </EmptySectionImageContainer> 

                        }

                        
                    </ListContainer>
          
                </section>
            </main>


    </AppContainer> 
    )
    
}