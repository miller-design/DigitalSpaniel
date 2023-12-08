/*
  utility functions to be used across project
*/
export const createImageSrcSizes = (data: number[]) => {
	/*
    Function is used to convert an array of numbers into a
    string that can be usesd on the next image sizes attribute.
    Values are provied in the order of [mobile, tablet, desktop]
    for example: [100, 50, 25]
    will become: (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  */
	let string = ``
	const bps = [`(max-width: 768px)`, `(max-width: 1200px)`, ``]

	if (data.length === 0) {
		// no values have been supplied
		console.log(`no sizes have been provided`)
	} else if (data.length > 3) {
		// too many values have been supplied
		console.log(`to many sizes have been provied, please limit to 3`)
	} else {
		// get last index from array
		const lastIndex = data.length - 1
		// loop over the array and prepend sizes info based on the array count
		for (let i = 0; i < data.length; i++) {
			// if is last index then we dont need bp data to be prepended
			if (i != lastIndex) {
				string += `${bps[i]} ` + data[i] + `vw, `
			} else {
				string += data[i] + `vw`
			}
		}

		return string
	}
}

export const getImageRatio = (width: number, height: number) => {
	/*
	* Function used for calculating the aspect ratio an image,
	* This comes in handy when trying to work with intrinsic images
	*/
	for (let num = height; num > 1; num--) {
		if (width % num == 0 && height % num == 0) {
			width = width / num
			height = height / num
		}
	}
	const ratio = width + `/` + height
	return ratio
}

export const getRatioFallback = (width: number, height: number) => {
	/*
	* Function used for calculating the a percentage fallback for intrinsic images
	*/
	return (height / width) * 100 + `%`
}

export const getSizeValuesFromString = (url: string) => {

	if(!url) {
		return null
	}

	const urlSplit = url.split("?")

	if(urlSplit.length <= 0) {
		return null
	}

	const urlParams = new URLSearchParams(urlSplit[1])
	const widthValue = parseFloat(urlParams.get("width") ?? '0')
	const heightValue = parseFloat(urlParams.get("height") ?? '0')

	return {
		width: widthValue,
		height: heightValue
	}
}
