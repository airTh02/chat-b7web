import { useChat } from "@/contexts/ChatContext"
import { useUser } from "@/contexts/UserContext";

export const ChatMessages = () => {
    const chatCtx = useChat();
    const userCtx = useUser();
    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map(item => (
                <div
                    key={item.id}
                    className={`border border-black rounded-md p-2 text-sm
                        ${item.user === userCtx?.user ?
                            'self-end bg-gray-400 text-right' :
                            'self-start bg-gray-200 text-left'
                        }
                        `}
                >
                    <div className="font-bold">{item.user}</div>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}