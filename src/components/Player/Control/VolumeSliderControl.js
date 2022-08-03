import React from "react"
import Slider from "../Slider"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux"
import { setVolume } from "../../../redux/features/audioSlice"

const VolumeSliderControl = ({ auRef }) => {

  const volume = useAppSelector((state) => state.audio.volume)
  const dispath = useAppDispatch()

  return(
    <Slider
      setWidth={"84px"}
      setHeight={"4px"}
      percentSlider={Number(volume) * 100}
      toogleTooltip={false}
      getPercentSlider={(value) => {
        if(auRef) {
          localStorage.setItem("volume", String(value / 100))
          dispath(setVolume(
            value / 100
          ))
          auRef.volume = value / 100
        }
      }}
    />
  )
}

export default VolumeSliderControl