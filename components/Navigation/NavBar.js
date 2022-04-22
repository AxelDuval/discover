import React from 'react'
import Link from 'next/link'


export default function NavBar() {
  return (
    <> 
    <Link href="/">
       <li>Accueil</li> 
    </Link>
    <Link href="/users">
    <li>Utilisateurs</li> 
    </Link>
    <Link href="/places">
    <li>Lieux</li> 
    </Link>
    </>
    
  )}
