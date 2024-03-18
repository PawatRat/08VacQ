import Image from "next/image"
import { mock } from "node:test"

export default function HospitalDetailPage( {params}: {params: {hid: string}}) {
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", {name: "Chulalongkorn Hospital", image: '/img/chula.jpg'})
    mockHospitalRepo.set("002", {name: "Rajavithi Hospital", image: '/img/rajavithi.jpg'})
    mockHospitalRepo.set("003", {name: "Thammasat University Hospital", image: '/img/thammasat.jpg'})
    
    return (
        <div>
        <h1 className="text-center">Hospital ID{params.hid}</h1>
        <div className="flex flex-row gap-2 m-3">
            <Image src={(mockHospitalRepo.get(params.hid)).image} alt='hospital image' width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%]"/>
        <div>{mockHospitalRepo.get(params.hid).name}</div>
        </div>
        </div>
    );
}

export async function generateStaticParams() {
    return [
        {hid: "001"},
        {hid: "002"},
        {hid: "003"}
    ]
}