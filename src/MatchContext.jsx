import React, { createContext, useState, useEffect } from 'react';

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/PL/matches',
          {
            headers: {
              'X-Auth-Token': '403acced24c74b22b35fd1d1bcbce4f7',
            },
          }
        );
        const data = await response.json();
        setMatches(data.matches);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <MatchContext.Provider value={{ matches, loading }}>
      {children}
    </MatchContext.Provider>
  );
};
