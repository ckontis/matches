

export default function MatchCard({ match }) {
   
    return (
        <div className="match-card">
        <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
        <p>{new Date(match.utcDate).toLocaleString()}</p>
        
        </div>
    );
}