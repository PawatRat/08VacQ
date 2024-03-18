import Link from "next/link";
import styles from "./topmenu.module.css"
import { link } from "fs/promises";

export default function TopMenuItem( {title , pageRef} : {title:string, pageRef: string} ) {
    return (
        <Link href={pageRef} className={styles.itemcontainer}>
            {title}
        </Link>
    );
}