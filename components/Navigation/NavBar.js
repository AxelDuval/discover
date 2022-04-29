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
    <Link href="/places/new_place">
    <li>Créér un lieu</li> 
    </Link>
    <Link href="/auth/signIn">
    <li>S'inscrire</li> 
    </Link>
    <Link href="/auth/login">
    <li>S'identifier</li> 
    </Link>
    </>
    
  )}
