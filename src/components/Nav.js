import React from 'react';
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Fixture">Fixture</Link>
                </li>
                <li>
                    <Link to="/Stats">Stats</Link>
                </li>
            </ul>
        </nav>
    )
}