/**
 * Format data from api call
 */
export const formatData = (res: any) => ({
  contents: res.data.contents,
  tag: res.data.tag.toLowerCase() // TODO: Make better
})

/**
 * Display error message - formatting is a bit yolo
 */
export const getErrorMessage = (contents: any) => {
  // eslint-disable-next-line
  console.log(contents)
  return contents[0] === 'nordikcoin-cb'
    ? contents[1] === 'Not eligible due to age.'
      ? 1
      : 0
    : contents[1] === 'A similar card already exists.'
      ? 1
      : contents[1] === 'Price not available.'
        ? 2
        : contents[1] === 'User mismatch.'
          ? 3
          : contents[1].includes('PayerId mismatch')
            ? 3
            : contents[1] === 'Invoice belongs to different user.'
              ? 3
              : contents[1] === 'Invoice already claimed.'
                ? 3
                : contents[1] === 'Could not verify card.'
                  ? 10
                  : contents[1] === 'No such invoice.' // getInvoiceData
                    ? 4
                    : contents[1] === 'Old pricePt already in use.' // skip payment
                      ? 101
                      : contents[1] === 'Invalid invoice status for locking.' // Go back to start for invoice status
                        ? 102
                        : contents[1] === 'Invoice expired.'
                          ? 1
                          : contents[1] === 'Invoice canceled.'
                            ? 2
                            : contents[1] === 'Invoice already paid.'
                              ? 3
                              : contents[1] === 'Insufficient funds.'
                                ? 4
                                : contents[1] === 'Contact support.'
                                  ? 14
                                  : contents[1] === 'Questionnaire not submitted.' // Show questionare
                                    ? 103
                                    : contents[1] === 'Not eligible due to age.'
                                      ? 15
                                      : contents[1] === 'Order limit exceeded.'
                                        ? 16
                                        : contents[1] === 'Currency not supported.'
                                          ? 6
                                          : 0
}

export const continueIfSuccess = (data: any) =>
  new Promise((resolve, reject) =>
    data.tag === 'success' ? resolve(data) : reject(data)
  )

export const handleReject = (r: any, d = {}) => (data: any) => {
  if (data.tag) {
    // Handle error
    r(
      Object.assign({}, d, {
        displayMessage: getErrorMessage(data.contents)
      })
    )
  } else {
    // Dont handle error
    // eslint-disable-next-line
    console.log(data)
    r()
  }
}
