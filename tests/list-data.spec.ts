import { getAllItems, handleList } from '../src/management-api'

describe('List Data', () => {
  describe('getAllItems', () => {
    it('Should get all pages', async () => {
      const getResult = jest
        .fn()
        .mockImplementationOnce(() =>
          Promise.resolve({
            meta: {
              pagination: {
                current_page: 1,
                total_pages: 4,
              },
            },
            data: [1, 1, 1],
          })
        )
        .mockImplementationOnce(() =>
          Promise.resolve({
            meta: {
              pagination: {
                current_page: 2,
                total_pages: 4,
              },
            },
            data: [2, 2, 2],
          })
        )
        .mockImplementationOnce(() =>
          Promise.resolve({
            meta: {
              pagination: {
                current_page: 3,
                total_pages: 4,
              },
            },
            data: [3, 3, 3],
          })
        )
        .mockImplementationOnce(() =>
          Promise.resolve({
            meta: {
              pagination: {
                current_page: 4,
                total_pages: 4,
              },
            },
            data: [4, 4],
          })
        )
      const result = await getAllItems(() => getResult())
      expect(result).toHaveLength(11)
      expect(result).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4])
    })
  })

  describe('handleList', () => {
    it('Should call callback for each item', async () => {
      const callback = jest.fn()
      await handleList([1,2,3], callback)
      expect(callback).toHaveBeenCalledTimes(3)
      expect(callback).toHaveBeenNthCalledWith(1, 1)
      expect(callback).toHaveBeenNthCalledWith(2, 2)
      expect(callback).toHaveBeenNthCalledWith(3, 3)
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
