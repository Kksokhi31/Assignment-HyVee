import styles from './display.module.css';

interface ResultProps {
    data: {
      message?: string;
      fact?: string;
    };
  }
  
  const Result: React.FC<ResultProps> = ({ data }) => {
    return (
      <div className = {styles.div}>
        {data && data.message && <img className = {styles.img} src={data.message} alt="Animal" />}
        {data && data.fact && <p className = {styles.p}>{data.fact}</p>}
      </div>
    );
  };
  
  
  export default Result;
  