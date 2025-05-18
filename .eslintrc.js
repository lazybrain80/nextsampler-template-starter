// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  extends: ['react-app', 'plugin:@next/next/recommended'],
  ignorePatterns: ['node_modules', '.next', 'dist', 'out'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js에서는 필요 없음
    // 필요시 추가 룰 작성
  },
}
