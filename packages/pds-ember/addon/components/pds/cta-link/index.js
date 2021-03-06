import LinkComponent from '@ember/routing/link-component';

/**
 * @class PdsCtaLink
 */
export default class PdsCtaLink extends LinkComponent {
  /**
   * **Use sparingly!**
   *
   * Because this component extends `<LinkTo>`, it supports the use of `@disabled`.
   * However, this will only prevent Ember route transitions and will not prevent
   * element focus.
   *
   * @argument disabled
   * @type {boolean}
   * @default false
   */
  disabledClass = 'pds--disabled'

  /**
   * Display variant
   *
   * If left blank or undefined, defaults to "primary" appearance.
   *
   * Valid values include:
   *
   *   - `ghost`
   *   - (none)
   *
   * @argument variant
   * @type {string}
   */
  get classNames() {
    let result = ['pds--cta']

    if (this.variant) {
      result.push(`pds--${this.variant}`)
    }

    return result
  }
}
