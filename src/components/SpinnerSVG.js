import React from 'react'
import PropTypes from "prop-types";


const SpinnerSvg = (props) => {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 

            // style={{
            //     margin: 'auto', 
            //     background: 'rgb(241, 242, 243)', 
            //     display: 'block', 
            //     shapeRendering: 'auto', 
            //     animationPlayState: 'running', 
            //     animationDelay: '0s',
            //     zIndex:3
            // }} 
            style={{
                position: 'absolute',
                top: props.top,
                left: props.left,
                transform: 'translate(-50%,-50%)',
                background: 'transparent', 
                display: 'block', 
                shapeRendering: 'auto', 
                animationPlayState: 'running', 
                animationDelay: '0s',
                color:'red',
                zIndex:3,
            }} 

            width={props.width} height={props.height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(30 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(60 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(90 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(120 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(150 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(180 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(210 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(240 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(270 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(300 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g><g transform="rotate(330 50 50)" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#13aedf" style={{animationPlayState: 'running', animationDelay: '0s'}}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" style={{animationPlayState: 'running', animationDelay: '0s'}} />
                </rect>
            </g>
            </svg>

        </React.Fragment>
    )
}



SpinnerSvg.propTypes = {

    left: PropTypes.string,
    top: PropTypes.string,
    width:PropTypes.string,
    height:PropTypes.string,
  
  };


SpinnerSvg.defaultProps = {

    left: "45%",
    top: "20%",
    width:"100px",
    height:"100px"
}



export default SpinnerSvg


