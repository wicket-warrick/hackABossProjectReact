import useNews from "../../hooks/useNews";
import { NewsFilter } from "../../components/NewsFilter";
import { NewsList } from "../../components/NewsList";
import { Calendar } from "../../components/Calendar";
import { ListbyVotes } from "../../components/NewsListbyVotes";
import "./style.css";
import { Loading } from "../../components/Loading";
export const Home = () => {
  const { news, loading, error, setDate, setTopic, topic, date, deleteNew } =
    useNews();
  if (loading) return <Loading message="Cargando noticias..." />;

  return (
    <div>
      <h2>ÚLTIMAS NOTICIAS</h2>
      <div className="filterCalendar">
        <Calendar date={date} setDate={setDate} />
        <NewsFilter setTopic={setTopic} topic={topic} />
      </div>
      <div className="newsZone">
        <NewsList news={news} error={error} deleteNew={deleteNew} />
        <ListbyVotes error={error} />
      </div>
    </div>
  );
};
