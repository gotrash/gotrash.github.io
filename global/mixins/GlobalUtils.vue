<script>
  export default {
    methods: {
      /**
       * This is used mainly in form components that use render functions, for which there is plenty.
       *
       * Using render functions, we can't use the `stop` or `prevent` modifiers, so we need to do it manually.
       *
       * If the passed object is not an instance of `Event`, the method should throw a `TypeError`.  If the
       * `preventDefault` and/or `stopPropagation` methods are, for one reason or another, not available on the event
       * object passed into the method, it should fail silently.  If the first of the methods is missing, the existence
       * of the latter should still be checked.
       *
       * @param evt The event which we are performing the actions on.
       * @throws Error if `evt` object is missing.
       * @throws TypeError if `evt` isn't an instance of `Event`.
       */
      stopPrevent: evt => {
        // Throw error if `evt` is missing or not an instance of `Event`.
        if (!evt) throw new Error("Must provide an `Event` object to this method.");
        if (!(evt instanceof Event)) throw new TypeError("Object should be an instance of `Event`.");

        // Prevent the default action
        if (evt.preventDefault) evt.preventDefault();

        // Stop the vent propagating to child elements
        if (evt.stopPropagation) evt.stopPropagation();
      }
    }
  };
</script>
