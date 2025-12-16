import {useState} from 'react';
import data from './data';
import styles  from './index.module.css'


function Accordion(){
    const [selected, setSelected] = useState(null);
    const [dataList, setDataList] = useState(data);
    const [multiple, setMultiple] = useState([])
    const [allowMulit, setAllowMulti] = useState(false)

    const handleSelection = (currId)=>{
        setSelected(currId == selected? null : currId)
    }
    const handleMultiSelection = (currId)=>{
        let cpyArr = [...multiple]
        cpyArr.includes(currId)
            ?cpyArr = cpyArr.filter((el)=>el != currId)
            :cpyArr = [...cpyArr, currId]
        setMultiple(cpyArr)
    }


    return (
        <>
            <div className={styles["wrapper"]}>
                <button onClick={()=>setAllowMulti(!allowMulit)} className={styles["enableMultipleSelect"]}>Enable Multiple Selection</button>
                
                <div className={styles["acc"]}>
                    {
                        dataList && dataList.length>0
                        ? dataList.map(item =>(
                                <div key={item.id} 
                                    onClick=
                                    {allowMulit 
                                        ?()=> handleMultiSelection(item.id)
                                        :()=> handleSelection(item.id)} className={styles["acc__parent"]
                                    }>
                                    <div className={styles["acc__title"]}>{item.question}</div>
                                    {   
                                        allowMulit
                                            ?multiple.includes(item.id)
                                                ? <div className={styles['acc__answer']}>{item.answer} </div>
                                                :  null  
                                            :selected === item.id
                                                ?<div className={styles['acc__answer']}>{item.answer} </div> 
                                                : null
                                    }
                                </div> 
                            )
                        )
                        : <p>Data not found</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Accordion;









