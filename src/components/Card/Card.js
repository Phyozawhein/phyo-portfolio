import React,{useState} from 'react';
import Icon from '../Icon/Icon';
import './Card.css';
const Card = ({themeColor, title ,tech, description ,gitHublink, website, className  })=>{
    const [display,setDisplay] = useState(false);

    const handleHover = (value)=>{
        setDisplay(value)
    }

    let cardDetails = (
            <React.Fragment>
                    {tech && 
                        
                        <h2 className="text-lg font-bold my-5">
                            {tech}
                        </h2>
                    }
                
                    <span>
                        {description}
                    </span>
                    <div className="flex flex-row justify-center project-links">
                        {
                        website && 
                            <Icon themeColor={themeColor} link="https://github.com/Phyozawhein">
                                <svg  viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  clip-rule="evenodd" d="M8.66308 6.45837C8.55866 6.11117 8.35917 5.78346 8.06517 5.511C7.154 4.66491 5.67641 4.66437 4.76525 5.511L1.84975 8.21825C0.938582 9.06487 0.937999 10.4364 1.84975 11.2825C2.76092 12.1291 4.23908 12.128 5.14908 11.2825L7.39025 9.20192L7.5845 9.20679C7.82017 9.20679 8.05233 9.18512 8.27808 9.14341L5.5615 11.6654C4.99275 12.1941 4.24608 12.4584 3.49942 12.4584C2.75275 12.4584 2.00608 12.1941 1.43733 11.6654C0.298665 10.6086 0.298665 8.89208 1.43733 7.83529L4.35283 5.12804C4.92158 4.59937 5.66883 4.33504 6.4155 4.33504C7.16158 4.33504 7.90883 4.59937 8.47758 5.12804C8.76517 5.39508 8.97983 5.70383 9.12216 6.03371L8.66308 6.45837ZM5.33633 6.538C5.44017 6.88629 5.64025 7.21508 5.93483 7.48917C6.846 8.33579 8.32417 8.33471 9.23417 7.48917L12.1502 4.78191C13.062 3.93583 13.062 2.56379 12.1502 1.71771C11.2391 0.871623 9.7615 0.871081 8.85033 1.71771L6.60975 3.79825L6.4155 3.79337C6.17983 3.79337 5.94767 3.81504 5.72192 3.85675L8.43792 1.33475C9.00667 0.806081 9.75391 0.541748 10.5006 0.541748C11.2467 0.541748 11.9939 0.806081 12.5627 1.33475C13.7007 2.39154 13.7007 4.10754 12.5627 5.16487L9.64658 7.87212C9.07783 8.40079 8.33116 8.66512 7.5845 8.66512C6.83783 8.66512 6.09117 8.40079 5.52242 7.87212C5.23425 7.604 5.019 7.29416 4.87667 6.96321L5.33633 6.538Z" fill="black"/>
                                </svg> 
                            </Icon>
                        }
                        {
                        gitHublink && 
                            <Icon themeColor={themeColor} link="https://github.com/Phyozawhein">
                                <svg  viewBox="0 0 35 31"  xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M17.5 0.315674C7.86064 0.315674 0.0440979 7.28563 0.0440979 15.8845C0.0440979 22.7634 5.04575 28.599 11.9815 30.6579C12.8536 30.8023 13.1739 30.3202 13.1739 29.9089C13.1739 29.5377 13.1577 28.3113 13.1502 27.0104C8.29394 27.9521 7.26922 25.1734 7.26922 25.1734C6.47516 23.3739 5.33105 22.8954 5.33105 22.8954C3.74699 21.9291 5.45043 21.9492 5.45043 21.9492C7.20302 22.0588 8.12629 23.5536 8.12629 23.5536C9.68318 25.9332 12.2099 25.2454 13.206 24.8478C13.3627 23.8416 13.815 23.1545 14.3142 22.7657C10.4371 22.3726 6.36098 21.0374 6.36098 15.0718C6.36098 13.3721 7.04317 11.9832 8.15982 10.8927C7.97829 10.5008 7.38079 8.91733 8.32863 6.77285C8.32863 6.77285 9.79418 6.35442 13.13 8.3687C14.5227 8.02349 16.0162 7.84999 17.5 7.84406C18.9829 7.84999 20.4773 8.02298 21.8727 8.36819C25.2044 6.3539 26.6682 6.77233 26.6682 6.77233C27.6183 8.91656 27.0209 10.5003 26.8396 10.8922C27.9589 11.9827 28.6361 13.3716 28.6361 15.0713C28.6361 21.051 24.5525 22.3674 20.6655 22.7531C21.2919 23.2362 21.8498 24.184 21.8498 25.6362C21.8498 27.7193 21.8296 29.3959 21.8296 29.9087C21.8296 30.323 22.1441 30.8084 23.0286 30.6556C29.9603 28.5946 34.9562 22.7608 34.9562 15.8845C34.9559 7.28615 27.1402 0.315674 17.5 0.315674Z" />
                                    <path d="M6.65555 22.6688C6.6171 22.7462 6.48067 22.7694 6.35637 22.7165C6.22918 22.666 6.15836 22.5605 6.19941 22.4829C6.23699 22.403 6.37371 22.3811 6.50003 22.4345C6.62722 22.4853 6.69949 22.5917 6.65526 22.6691L6.65555 22.6688ZM7.3626 23.3724C7.27964 23.4412 7.11689 23.4093 7.00647 23.3002C6.892 23.1919 6.87061 23.0468 6.95531 22.9769C7.04145 22.9083 7.19928 22.9408 7.31374 23.0491C7.42763 23.1589 7.45018 23.3028 7.36288 23.3726L7.3626 23.3724ZM8.05114 24.2688C7.94419 24.3353 7.76902 24.2732 7.66091 24.1347C7.55396 23.996 7.55396 23.8297 7.6638 23.7635C7.77162 23.697 7.94419 23.757 8.05403 23.8942C8.16041 24.0347 8.16041 24.2013 8.05114 24.2688ZM8.99378 25.1353C8.89839 25.2294 8.69431 25.2041 8.54515 25.076C8.39281 24.9505 8.35032 24.7718 8.446 24.678C8.54313 24.5836 8.74807 24.6099 8.8981 24.7372C9.05043 24.8625 9.09639 25.0415 8.99435 25.1351L8.99378 25.1353ZM10.2946 25.6383C10.2521 25.7602 10.0561 25.8157 9.85807 25.7636C9.66064 25.7102 9.53143 25.5677 9.5719 25.4444C9.61237 25.3215 9.8098 25.264 10.009 25.3194C10.2064 25.3725 10.3356 25.5143 10.2946 25.6383ZM11.7234 25.7314C11.7283 25.8598 11.5607 25.966 11.3534 25.9686C11.1444 25.9729 10.9753 25.8688 10.9733 25.7425C10.9733 25.6128 11.1375 25.5079 11.3462 25.5042C11.5534 25.5009 11.7237 25.604 11.7237 25.7311L11.7234 25.7314ZM13.0525 25.5298C13.0774 25.6548 12.9331 25.7835 12.727 25.8177C12.5247 25.8513 12.3368 25.7734 12.3108 25.6494C12.2859 25.521 12.4328 25.3923 12.6351 25.3591C12.8415 25.3274 13.0265 25.4027 13.0525 25.5298Z" />
                                </svg>
                            </Icon>
                        }
                </div>
            </React.Fragment>
    )
    return(
            <div 
                className={`border-2 m-2 p-2 card-${themeColor} flex flex-col text-center justify-center items-center card` } 
                onMouseOver={()=>handleHover(true)}
                onMouseOut={()=>handleHover(false)}
                >
                <h1 className="text-2xl font-bold " >
                    {title}
                </h1>
                {display ? cardDetails : null}
            </div>
    )

}

export default Card;