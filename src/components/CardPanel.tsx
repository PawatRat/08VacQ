'use client'
import { useReducer, useRef } from "react";
import Card from "./Card";
import styles from './cardpanel.module.css'
import Link from "next/link";

export default function CardPanel() {

    const compareReducer = (compareList:Set<string>, action:{type:string, hospitalName: string}) => {
        switch (action.type) {
            case 'add':
                return new Set (compareList.add(action.hospitalName));
            case 'remove':
                compareList.delete(action.hospitalName)
                return new Set ( compareList );
            default:
                return compareList;
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>())

    const ratingReducer = (ratingList:Map<string, number>, action:{ type:string, hospitalName: string, rating: number}) => {
        switch (action.type) {
            case 'change':
                const newRatingListChange = new Map(ratingList);
                newRatingListChange.set(action.hospitalName, action.rating);
                return newRatingListChange;
            case 'remove':
                const newRatingListRemove = new Map(ratingList);
                newRatingListRemove.delete(action.hospitalName);
                return newRatingListRemove;
            default:
                return ratingList;
        }
    }

    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string, number>(
        [['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5]]
    ));

    // Create Mock
    const mockHospitalRepo = [
        {
            hid: "001",
            name: 'Chulalongkorn Hospital',
            image : '/img/chula.jpg',
        },
        {
            hid: "002",
            name: 'Rajavithi Hospital',
            image : '/img/rajavithi.jpg',
        },
        {
            hid: "003",
            name: 'Thammasat University Hospital',
            image : '/img/thammasat.jpg',
        }
    ]


    return (
        <div>
            <div className={styles.containerCard}>
                {
                    mockHospitalRepo.map((items) => 
                    <Link href={`/hospital/${items.hid}`} className="w-1/5">
                    
                        <Card hospitalName={items.name} imgSrc={items.image} 
                            onCompare={ 
                                (hospital:string)=>dispatchCompare({type:'add', hospitalName:hospital}) }
                            setRate={
                                (hospital:string, rating:number)=>dispatchRating({type: 'change',  hospitalName:hospital, rating:rating})
                        }/>
                    </Link> )
                }
            </div>
        
            <div className="flex justify-center">
                <div className="block bg-gray-100 shadow-xl p-4 rounded-md m-3">
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">
                        Your Rating List: {ratingList.size}
                    </div>

                    { Array.from(ratingList).map(([hospital, rating]) => 
                    <div key={hospital} data-testid={hospital} onClick={ ()=>dispatchRating({type: 'remove' , hospitalName: hospital, rating: 0} ) } >{hospital} : {rating} </div> )}
                </div>
            </div>
        </div>

    )
}