import { useUser } from "@/contexts/UserContext"
import { KeyboardEvent, useState } from "react"

export const NameInput = () => {
    const useCtx = useUser();
    const [nameInput, setNameInput] = useState('')
    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLocaleLowerCase() === 'enter') {
            if(nameInput.trim() !== '' && nameInput !== 'bot') {
                useCtx?.setUser(nameInput.trim())
            }
        }
    }
    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input 
                type="text" 
                className="flex-1 border border-black rounded md px-4 py-3 text-white bg-gray-700 outline-none"
                value={nameInput}
                onChange={e=> setNameInput(e.target.value)}
                onKeyUp={handleKeyUpAction}
                />
            </div>
        </div>
    )
}