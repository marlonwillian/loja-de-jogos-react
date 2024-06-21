import jogos from "../../json/games.json";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

function RedirectPage() {
  const params = useParams()
  const jogo = jogos.find((jogo) => { return jogo.id === params.id })
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/jogo/${jogo.id}`);
  }, [jogo.id]);

}

export default RedirectPage;
