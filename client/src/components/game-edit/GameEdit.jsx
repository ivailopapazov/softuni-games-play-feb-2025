import { useNavigate, useParams } from "react-router";
import { useEditGame, useGame } from "../../api/gameApi";

export default function GameEdit() {
    const navigate = useNavigate()
    const { gameId } = useParams();
    const { game } = useGame(gameId)
    const { edit } = useEditGame();

    const formAction = async (formData) => {
        const gameData = Object.fromEntries(formData);

        await edit(gameId, gameData);

        navigate(`/games/${gameId}/details`);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" action={formAction}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />

                </div>
            </form>
        </section>
    );
}
