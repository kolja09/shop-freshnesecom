import React, { useState, useEffect } from "react";

import { IRangeSliderProps } from "./types";
import {
    SliderContainer,
    InputRangeMin,
    InputRangeMax,
    FormBlock,
    FormWrapper,
    Input,
    NameForm
} from "./styled";

const RangeSlider = ({min, max}: IRangeSliderProps) => {
    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(avg);
    const [maxVal, setMaxVal] = useState(avg);
    const thumbsize = 14;
    const width = 250;
    const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const styles = {
        min: {
            width: minWidth,
            left: 0,
        },
        max: {
            width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
        }
    };

    useEffect(() => {
        setAvg((maxVal + minVal) / 2);
    }, [minVal, maxVal]);

    return (
        <>
            <SliderContainer
                className="min-max-slider"
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                data-thumbsize={thumbsize}
                data-rangewidth={width}
            >
                <InputRangeMin
                    style={styles.min}
                    name="min"
                    type="range"
                    step="1"
                    min={min}
                    max={avg}
                    value={minVal}
                    onChange={({target}) => setMinVal(Number(target.value))}
                />
                <InputRangeMax
                    style={styles.max}
                    name="max"
                    type="range"
                    step="1"
                    min={avg}
                    max={max}
                    value={maxVal}
                    onChange={({target}) => setMaxVal(Number(target.value))}
                />
            </SliderContainer>
            <FormWrapper>
                <FormBlock>
                    <NameForm>Min</NameForm>
                    <Input value={minVal}/>
                </FormBlock>
                <FormBlock>
                    <NameForm>Max</NameForm>
                    <Input value={Math.ceil(maxVal)}/>
                </FormBlock>
            </FormWrapper>
        </>
    );
};

export default RangeSlider
