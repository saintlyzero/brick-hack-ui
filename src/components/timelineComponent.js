import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const BasicTimeline = (props) => {

  return (
    <Timeline position='alternate'>
      {props.elements.map((element, index) => {
        return       (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          { index <= props.elements.length-2 && <TimelineConnector sx={{backgroundColor:"#ff414e"}} />}
        </TimelineSeparator >
        <TimelineContent sx={{fontWeight:900, fontSize:"18px"}}>{element}</TimelineContent>
      </TimelineItem>)
      })}
    </Timeline>
  );
}


export default BasicTimeline