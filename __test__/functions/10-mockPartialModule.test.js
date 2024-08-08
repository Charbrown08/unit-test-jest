const partialModule = require('../../src/services/partialModule')
jest.mock('../../src/services/partialModule', () => {
  const originalPartialModule = jest.requireActual(
    '../../src/services/partialModule',
  )

  return {
    // __esModule: true, only by  ES Modules (ESM): use export y import
    ...originalPartialModule,
    add: jest.fn((a, b) => a + b + 1),
    default: jest.fn(() => 'mocked default function'),
  }
})

test('should do a partial mock', () => {
  const defaultPartialModule = partialModule.default()
  console.log('🚀 ~ test ~  defaultPartialModule:', defaultPartialModule)
  expect(defaultPartialModule).toBe('mocked default function')
  expect(partialModule.default).toHaveBeenCalled()
  expect(partialModule.add(1, 2)).toBe(4)
  expect(partialModule.add).toHaveBeenCalledWith(1, 2)
  expect(partialModule.add).toHaveReturnedWith(4)
  expect(partialModule.multiply(2, 3)).toBe(6)
})
