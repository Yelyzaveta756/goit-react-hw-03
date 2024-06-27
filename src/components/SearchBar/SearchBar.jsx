import { useState } from "react"
import css from './SearchBar.module.css'
export default function SearchBar({search, onSearch}){

    
    return (
        <div>
            <p className={css.findTitle}>Find contacts by name</p>
            <input type="text" value={search} onChange={onSearch} className={css.searchInput}/>
        </div>
    )
}